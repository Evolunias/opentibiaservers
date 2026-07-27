import Alastera86RealMapServerKeywordPage, { generateMetadata } from './alastera-8-6-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86RealMapServerKeywordPage />;
}
