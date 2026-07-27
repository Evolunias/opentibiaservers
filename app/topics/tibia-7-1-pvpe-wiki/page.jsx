import Tibia71PvpeWikiKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeWikiKeywordPage />;
}
