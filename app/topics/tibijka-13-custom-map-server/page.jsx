import Tibijka13CustomMapServerKeywordPage, { generateMetadata } from './tibijka-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13CustomMapServerKeywordPage />;
}
