import RealMapSeasonSwedenKeywordPage, { generateMetadata } from './real-map-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonSwedenKeywordPage />;
}
