import Tibia86PvpeWikiKeywordPage, { generateMetadata } from './tibia-8-6-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpeWikiKeywordPage />;
}
