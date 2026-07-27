import Alastera74CustomMapServerKeywordPage, { generateMetadata } from './alastera-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera74CustomMapServerKeywordPage />;
}
