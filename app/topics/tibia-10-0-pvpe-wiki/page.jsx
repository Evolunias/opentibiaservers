import Tibia100PvpeWikiKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeWikiKeywordPage />;
}
