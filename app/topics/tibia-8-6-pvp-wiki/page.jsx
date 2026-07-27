import Tibia86PvpWikiKeywordPage, { generateMetadata } from './tibia-8-6-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpWikiKeywordPage />;
}
