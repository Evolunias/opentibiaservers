import Tibia13PvpWikiKeywordPage, { generateMetadata } from './tibia-13-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpWikiKeywordPage />;
}
