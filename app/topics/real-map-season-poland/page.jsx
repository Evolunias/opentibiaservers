import RealMapSeasonPolandKeywordPage, { generateMetadata } from './real-map-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonPolandKeywordPage />;
}
