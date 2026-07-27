import Alastera71RealMapServerKeywordPage, { generateMetadata } from './alastera-7-1-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71RealMapServerKeywordPage />;
}
