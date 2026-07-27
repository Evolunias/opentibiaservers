import Tibia96BaiakWikiKeywordPage, { generateMetadata } from './tibia-9-6-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96BaiakWikiKeywordPage />;
}
