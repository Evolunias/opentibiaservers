import Alastera81CustomMapServerKeywordPage, { generateMetadata } from './alastera-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera81CustomMapServerKeywordPage />;
}
