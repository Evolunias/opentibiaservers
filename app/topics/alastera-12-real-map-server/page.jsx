import Alastera12RealMapServerKeywordPage, { generateMetadata } from './alastera-12-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12RealMapServerKeywordPage />;
}
