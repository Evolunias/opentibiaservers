import Tibia71BaiakWikiKeywordPage, { generateMetadata } from './tibia-7-1-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71BaiakWikiKeywordPage />;
}
