import Tibia1098RealMapWikiKeywordPage, { generateMetadata } from './tibia-10-98-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RealMapWikiKeywordPage />;
}
