import Tibijka84CustomMapServerKeywordPage, { generateMetadata } from './tibijka-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka84CustomMapServerKeywordPage />;
}
