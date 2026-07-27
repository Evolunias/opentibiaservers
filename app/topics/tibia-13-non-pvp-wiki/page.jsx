import Tibia13NonPvpWikiKeywordPage, { generateMetadata } from './tibia-13-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpWikiKeywordPage />;
}
