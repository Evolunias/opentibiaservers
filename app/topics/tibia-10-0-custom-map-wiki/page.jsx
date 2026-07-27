import Tibia100CustomMapWikiKeywordPage, { generateMetadata } from './tibia-10-0-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100CustomMapWikiKeywordPage />;
}
