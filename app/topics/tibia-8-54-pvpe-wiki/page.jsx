import Tibia854PvpeWikiKeywordPage, { generateMetadata } from './tibia-8-54-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpeWikiKeywordPage />;
}
