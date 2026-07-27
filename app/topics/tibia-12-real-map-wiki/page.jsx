import Tibia12RealMapWikiKeywordPage, { generateMetadata } from './tibia-12-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RealMapWikiKeywordPage />;
}
