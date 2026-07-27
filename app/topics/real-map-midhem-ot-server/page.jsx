import RealMapMidhemOtServerKeywordPage, { generateMetadata } from './real-map-midhem-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemOtServerKeywordPage />;
}
