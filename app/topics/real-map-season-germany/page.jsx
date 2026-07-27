import RealMapSeasonGermanyKeywordPage, { generateMetadata } from './real-map-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonGermanyKeywordPage />;
}
