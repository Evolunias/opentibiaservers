import RealMapCyntaraOtServerKeywordPage, { generateMetadata } from './real-map-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraOtServerKeywordPage />;
}
