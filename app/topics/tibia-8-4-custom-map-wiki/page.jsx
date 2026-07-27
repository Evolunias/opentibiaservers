import Tibia84CustomMapWikiKeywordPage, { generateMetadata } from './tibia-8-4-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84CustomMapWikiKeywordPage />;
}
