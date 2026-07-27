import Tibia96CustomMapWikiKeywordPage, { generateMetadata } from './tibia-9-6-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96CustomMapWikiKeywordPage />;
}
