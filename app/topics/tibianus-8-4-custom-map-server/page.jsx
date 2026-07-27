import Tibianus84CustomMapServerKeywordPage, { generateMetadata } from './tibianus-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus84CustomMapServerKeywordPage />;
}
