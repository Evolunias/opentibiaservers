import Tibia71NonPvpWikiKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpWikiKeywordPage />;
}
