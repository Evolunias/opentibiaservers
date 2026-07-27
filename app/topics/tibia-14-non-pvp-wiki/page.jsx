import Tibia14NonPvpWikiKeywordPage, { generateMetadata } from './tibia-14-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpWikiKeywordPage />;
}
