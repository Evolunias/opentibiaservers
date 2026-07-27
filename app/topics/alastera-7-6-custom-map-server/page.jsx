import Alastera76CustomMapServerKeywordPage, { generateMetadata } from './alastera-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera76CustomMapServerKeywordPage />;
}
