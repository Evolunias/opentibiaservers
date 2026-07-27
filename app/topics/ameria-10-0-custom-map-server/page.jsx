import Ameria100CustomMapServerKeywordPage, { generateMetadata } from './ameria-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria100CustomMapServerKeywordPage />;
}
