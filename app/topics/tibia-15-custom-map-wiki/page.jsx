import Tibia15CustomMapWikiKeywordPage, { generateMetadata } from './tibia-15-custom-map-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15CustomMapWikiKeywordPage />;
}
