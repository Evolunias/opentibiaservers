import Tibiantis13CustomMapServerKeywordPage, { generateMetadata } from './tibiantis-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis13CustomMapServerKeywordPage />;
}
