import RealMapCyntaraServerKeywordPage, { generateMetadata } from './real-map-cyntara-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraServerKeywordPage />;
}
