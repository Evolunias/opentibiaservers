import Tibia11NonPvpWikiKeywordPage, { generateMetadata } from './tibia-11-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpWikiKeywordPage />;
}
