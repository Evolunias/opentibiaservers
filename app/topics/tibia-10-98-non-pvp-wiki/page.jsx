import Tibia1098NonPvpWikiKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpWikiKeywordPage />;
}
