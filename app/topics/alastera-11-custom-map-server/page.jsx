import Alastera11CustomMapServerKeywordPage, { generateMetadata } from './alastera-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11CustomMapServerKeywordPage />;
}
