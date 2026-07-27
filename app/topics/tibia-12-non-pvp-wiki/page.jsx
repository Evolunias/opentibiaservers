import Tibia12NonPvpWikiKeywordPage, { generateMetadata } from './tibia-12-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpWikiKeywordPage />;
}
