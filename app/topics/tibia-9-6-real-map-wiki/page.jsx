import Tibia96RealMapWikiKeywordPage, { generateMetadata } from './tibia-9-6-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RealMapWikiKeywordPage />;
}
