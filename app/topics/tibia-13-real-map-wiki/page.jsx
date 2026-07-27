import Tibia13RealMapWikiKeywordPage, { generateMetadata } from './tibia-13-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RealMapWikiKeywordPage />;
}
