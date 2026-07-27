import Alastera13RealMapServerKeywordPage, { generateMetadata } from './alastera-13-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13RealMapServerKeywordPage />;
}
