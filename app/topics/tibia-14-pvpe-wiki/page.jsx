import Tibia14PvpeWikiKeywordPage, { generateMetadata } from './tibia-14-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeWikiKeywordPage />;
}
