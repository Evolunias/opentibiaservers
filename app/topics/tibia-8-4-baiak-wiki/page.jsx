import Tibia84BaiakWikiKeywordPage, { generateMetadata } from './tibia-8-4-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84BaiakWikiKeywordPage />;
}
