import Tibia15NonPvpWikiKeywordPage, { generateMetadata } from './tibia-15-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpWikiKeywordPage />;
}
