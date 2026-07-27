import RealMapSeasonLatinAmericaKeywordPage, { generateMetadata } from './real-map-season-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonLatinAmericaKeywordPage />;
}
