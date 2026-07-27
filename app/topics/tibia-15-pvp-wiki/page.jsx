import Tibia15PvpWikiKeywordPage, { generateMetadata } from './tibia-15-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpWikiKeywordPage />;
}
