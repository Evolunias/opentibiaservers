import Tibia76PvpWikiKeywordPage, { generateMetadata } from './tibia-7-6-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpWikiKeywordPage />;
}
