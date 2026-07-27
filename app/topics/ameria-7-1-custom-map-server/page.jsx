import Ameria71CustomMapServerKeywordPage, { generateMetadata } from './ameria-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria71CustomMapServerKeywordPage />;
}
