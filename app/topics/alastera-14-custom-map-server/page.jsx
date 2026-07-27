import Alastera14CustomMapServerKeywordPage, { generateMetadata } from './alastera-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14CustomMapServerKeywordPage />;
}
