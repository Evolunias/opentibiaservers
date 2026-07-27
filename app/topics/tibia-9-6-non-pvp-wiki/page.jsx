import Tibia96NonPvpWikiKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpWikiKeywordPage />;
}
