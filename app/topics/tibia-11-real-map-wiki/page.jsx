import Tibia11RealMapWikiKeywordPage, { generateMetadata } from './tibia-11-real-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RealMapWikiKeywordPage />;
}
