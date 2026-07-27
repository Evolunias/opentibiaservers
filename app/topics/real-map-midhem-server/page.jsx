import RealMapMidhemServerKeywordPage, { generateMetadata } from './real-map-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemServerKeywordPage />;
}
