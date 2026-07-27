import Tibijka76CustomMapServerKeywordPage, { generateMetadata } from './tibijka-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka76CustomMapServerKeywordPage />;
}
