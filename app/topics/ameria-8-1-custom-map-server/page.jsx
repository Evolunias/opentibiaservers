import Ameria81CustomMapServerKeywordPage, { generateMetadata } from './ameria-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria81CustomMapServerKeywordPage />;
}
