import RealMapMidhemOtKeywordPage, { generateMetadata } from './real-map-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemOtKeywordPage />;
}
