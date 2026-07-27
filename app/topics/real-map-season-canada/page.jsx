import RealMapSeasonCanadaKeywordPage, { generateMetadata } from './real-map-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonCanadaKeywordPage />;
}
