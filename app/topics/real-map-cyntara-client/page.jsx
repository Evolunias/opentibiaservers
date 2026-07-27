import RealMapCyntaraClientKeywordPage, { generateMetadata } from './real-map-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraClientKeywordPage />;
}
