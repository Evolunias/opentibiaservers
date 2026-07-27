import Alastera15RealMapServerKeywordPage, { generateMetadata } from './alastera-15-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15RealMapServerKeywordPage />;
}
