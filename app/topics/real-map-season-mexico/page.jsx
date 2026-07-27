import RealMapSeasonMexicoKeywordPage, { generateMetadata } from './real-map-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonMexicoKeywordPage />;
}
