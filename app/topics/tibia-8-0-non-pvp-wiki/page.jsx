import Tibia80NonPvpWikiKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpWikiKeywordPage />;
}
