import Tibia11BaiakWikiKeywordPage, { generateMetadata } from './tibia-11-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11BaiakWikiKeywordPage />;
}
