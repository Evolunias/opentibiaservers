import Tibianus80CustomMapServerKeywordPage, { generateMetadata } from './tibianus-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus80CustomMapServerKeywordPage />;
}
