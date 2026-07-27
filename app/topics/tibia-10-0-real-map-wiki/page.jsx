import Tibia100RealMapWikiKeywordPage, { generateMetadata } from './tibia-10-0-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RealMapWikiKeywordPage />;
}
