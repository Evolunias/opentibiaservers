import RealMapCyntaraLoginKeywordPage, { generateMetadata } from './real-map-cyntara-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraLoginKeywordPage />;
}
