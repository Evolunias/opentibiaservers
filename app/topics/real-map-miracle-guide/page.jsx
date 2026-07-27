import RealMapMiracleGuideKeywordPage, { generateMetadata } from './real-map-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMiracleGuideKeywordPage />;
}
