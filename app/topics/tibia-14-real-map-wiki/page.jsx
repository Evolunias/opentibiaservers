import Tibia14RealMapWikiKeywordPage, { generateMetadata } from './tibia-14-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RealMapWikiKeywordPage />;
}
