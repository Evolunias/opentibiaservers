import Ameria15CustomMapServerKeywordPage, { generateMetadata } from './ameria-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15CustomMapServerKeywordPage />;
}
