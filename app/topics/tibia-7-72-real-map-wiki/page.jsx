import Tibia772RealMapWikiKeywordPage, { generateMetadata } from './tibia-7-72-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RealMapWikiKeywordPage />;
}
