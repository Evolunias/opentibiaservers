import Tibia772PvpWikiKeywordPage, { generateMetadata } from './tibia-7-72-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpWikiKeywordPage />;
}
