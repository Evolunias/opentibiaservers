import RealMapMidhemKeywordPage, { generateMetadata } from './real-map-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemKeywordPage />;
}
