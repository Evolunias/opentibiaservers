import Tibianus13CustomMapServerKeywordPage, { generateMetadata } from './tibianus-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13CustomMapServerKeywordPage />;
}
