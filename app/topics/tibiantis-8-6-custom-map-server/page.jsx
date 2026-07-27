import Tibiantis86CustomMapServerKeywordPage, { generateMetadata } from './tibiantis-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis86CustomMapServerKeywordPage />;
}
