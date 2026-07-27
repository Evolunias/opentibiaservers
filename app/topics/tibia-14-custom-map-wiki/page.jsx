import Tibia14CustomMapWikiKeywordPage, { generateMetadata } from './tibia-14-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14CustomMapWikiKeywordPage />;
}
