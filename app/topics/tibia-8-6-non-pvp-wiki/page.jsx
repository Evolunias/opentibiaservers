import Tibia86NonPvpWikiKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpWikiKeywordPage />;
}
