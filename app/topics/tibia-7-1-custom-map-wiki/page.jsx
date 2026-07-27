import Tibia71CustomMapWikiKeywordPage, { generateMetadata } from './tibia-7-1-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71CustomMapWikiKeywordPage />;
}
