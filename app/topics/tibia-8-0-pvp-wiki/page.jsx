import Tibia80PvpWikiKeywordPage, { generateMetadata } from './tibia-8-0-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpWikiKeywordPage />;
}
