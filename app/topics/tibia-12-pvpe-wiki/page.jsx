import Tibia12PvpeWikiKeywordPage, { generateMetadata } from './tibia-12-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeWikiKeywordPage />;
}
