import Tibiantis80CustomMapServerKeywordPage, { generateMetadata } from './tibiantis-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis80CustomMapServerKeywordPage />;
}
