import Tibiantis15CustomMapServerKeywordPage, { generateMetadata } from './tibiantis-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis15CustomMapServerKeywordPage />;
}
