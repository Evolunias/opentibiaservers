import Tibiantis96CustomMapServerKeywordPage, { generateMetadata } from './tibiantis-9-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis96CustomMapServerKeywordPage />;
}
