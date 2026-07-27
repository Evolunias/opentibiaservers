import Tibia15PvpeWikiKeywordPage, { generateMetadata } from './tibia-15-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpeWikiKeywordPage />;
}
