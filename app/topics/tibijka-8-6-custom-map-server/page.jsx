import Tibijka86CustomMapServerKeywordPage, { generateMetadata } from './tibijka-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka86CustomMapServerKeywordPage />;
}
