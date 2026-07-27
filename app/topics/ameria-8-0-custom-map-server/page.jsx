import Ameria80CustomMapServerKeywordPage, { generateMetadata } from './ameria-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria80CustomMapServerKeywordPage />;
}
