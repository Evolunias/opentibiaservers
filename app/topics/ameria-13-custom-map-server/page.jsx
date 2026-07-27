import Ameria13CustomMapServerKeywordPage, { generateMetadata } from './ameria-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13CustomMapServerKeywordPage />;
}
