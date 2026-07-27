import Tibia100NonPvpWikiKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpWikiKeywordPage />;
}
