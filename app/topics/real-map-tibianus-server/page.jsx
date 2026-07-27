import RealMapTibianusServerKeywordPage, { generateMetadata } from './real-map-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusServerKeywordPage />;
}
