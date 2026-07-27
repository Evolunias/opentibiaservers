import Tibia1098PvpWikiKeywordPage, { generateMetadata } from './tibia-10-98-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpWikiKeywordPage />;
}
