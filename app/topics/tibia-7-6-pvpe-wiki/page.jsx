import Tibia76PvpeWikiKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeWikiKeywordPage />;
}
