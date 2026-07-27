import Tibiantis100CustomMapServerKeywordPage, { generateMetadata } from './tibiantis-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis100CustomMapServerKeywordPage />;
}
