import Alastera71CustomMapServerKeywordPage, { generateMetadata } from './alastera-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71CustomMapServerKeywordPage />;
}
