import RealMapSeasonBrazilKeywordPage, { generateMetadata } from './real-map-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonBrazilKeywordPage />;
}
