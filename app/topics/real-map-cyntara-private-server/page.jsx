import RealMapCyntaraPrivateServerKeywordPage, { generateMetadata } from './real-map-cyntara-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraPrivateServerKeywordPage />;
}
