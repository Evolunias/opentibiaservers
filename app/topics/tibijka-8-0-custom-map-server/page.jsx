import Tibijka80CustomMapServerKeywordPage, { generateMetadata } from './tibijka-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka80CustomMapServerKeywordPage />;
}
