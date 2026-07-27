import Tibia14PvpWikiKeywordPage, { generateMetadata } from './tibia-14-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpWikiKeywordPage />;
}
