import RealMapCyntaraOtsKeywordPage, { generateMetadata } from './real-map-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraOtsKeywordPage />;
}
