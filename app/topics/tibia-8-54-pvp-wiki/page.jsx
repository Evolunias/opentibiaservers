import Tibia854PvpWikiKeywordPage, { generateMetadata } from './tibia-8-54-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpWikiKeywordPage />;
}
