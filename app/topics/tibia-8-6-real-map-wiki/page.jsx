import Tibia86RealMapWikiKeywordPage, { generateMetadata } from './tibia-8-6-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RealMapWikiKeywordPage />;
}
