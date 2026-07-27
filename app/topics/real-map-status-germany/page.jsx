import RealMapStatusGermanyKeywordPage, { generateMetadata } from './real-map-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapStatusGermanyKeywordPage />;
}
