import Tibia13CustomMapWikiKeywordPage, { generateMetadata } from './tibia-13-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13CustomMapWikiKeywordPage />;
}
