import Tibia86CustomMapWikiKeywordPage, { generateMetadata } from './tibia-8-6-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86CustomMapWikiKeywordPage />;
}
