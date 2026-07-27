import Tibia84PvpeWikiKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeWikiKeywordPage />;
}
