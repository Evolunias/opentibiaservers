import Tibia71PvpWikiKeywordPage, { generateMetadata } from './tibia-7-1-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpWikiKeywordPage />;
}
