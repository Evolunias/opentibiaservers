import Alastera96RealMapServerKeywordPage, { generateMetadata } from './alastera-9-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96RealMapServerKeywordPage />;
}
