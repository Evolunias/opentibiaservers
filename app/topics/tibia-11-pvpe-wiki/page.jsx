import Tibia11PvpeWikiKeywordPage, { generateMetadata } from './tibia-11-pvpe-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeWikiKeywordPage />;
}
