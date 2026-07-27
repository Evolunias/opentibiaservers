import Tibia81NonPvpWikiKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpWikiKeywordPage />;
}
