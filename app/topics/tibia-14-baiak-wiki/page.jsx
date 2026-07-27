import Tibia14BaiakWikiKeywordPage, { generateMetadata } from './tibia-14-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14BaiakWikiKeywordPage />;
}
