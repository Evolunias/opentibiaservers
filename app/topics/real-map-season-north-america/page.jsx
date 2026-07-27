import RealMapSeasonNorthAmericaKeywordPage, { generateMetadata } from './real-map-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonNorthAmericaKeywordPage />;
}
