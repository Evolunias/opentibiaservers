import Ameria74CustomMapServerKeywordPage, { generateMetadata } from './ameria-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria74CustomMapServerKeywordPage />;
}
