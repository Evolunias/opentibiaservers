import Ameria86CustomMapServerKeywordPage, { generateMetadata } from './ameria-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria86CustomMapServerKeywordPage />;
}
