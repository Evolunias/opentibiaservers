import Tibiantis84CustomMapServerKeywordPage, { generateMetadata } from './tibiantis-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis84CustomMapServerKeywordPage />;
}
