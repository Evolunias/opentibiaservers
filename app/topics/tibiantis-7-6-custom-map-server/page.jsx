import Tibiantis76CustomMapServerKeywordPage, { generateMetadata } from './tibiantis-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis76CustomMapServerKeywordPage />;
}
