import Alastera12CustomMapServerKeywordPage, { generateMetadata } from './alastera-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12CustomMapServerKeywordPage />;
}
