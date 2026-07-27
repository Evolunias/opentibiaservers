import Tibijka15CustomMapServerKeywordPage, { generateMetadata } from './tibijka-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15CustomMapServerKeywordPage />;
}
