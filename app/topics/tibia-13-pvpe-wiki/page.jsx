import Tibia13PvpeWikiKeywordPage, { generateMetadata } from './tibia-13-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeWikiKeywordPage />;
}
