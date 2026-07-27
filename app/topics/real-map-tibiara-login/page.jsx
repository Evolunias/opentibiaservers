import RealMapTibiaraLoginKeywordPage, { generateMetadata } from './real-map-tibiara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraLoginKeywordPage />;
}
