import Tibia100PvpWikiKeywordPage, { generateMetadata } from './tibia-10-0-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpWikiKeywordPage />;
}
