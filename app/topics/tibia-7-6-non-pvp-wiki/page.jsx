import Tibia76NonPvpWikiKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpWikiKeywordPage />;
}
