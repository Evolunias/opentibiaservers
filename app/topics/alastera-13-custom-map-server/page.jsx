import Alastera13CustomMapServerKeywordPage, { generateMetadata } from './alastera-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13CustomMapServerKeywordPage />;
}
