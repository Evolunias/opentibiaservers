import Tibia76CustomMapWikiKeywordPage, { generateMetadata } from './tibia-7-6-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76CustomMapWikiKeywordPage />;
}
