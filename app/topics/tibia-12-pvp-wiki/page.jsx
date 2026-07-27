import Tibia12PvpWikiKeywordPage, { generateMetadata } from './tibia-12-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpWikiKeywordPage />;
}
