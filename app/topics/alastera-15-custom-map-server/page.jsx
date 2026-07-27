import Alastera15CustomMapServerKeywordPage, { generateMetadata } from './alastera-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15CustomMapServerKeywordPage />;
}
