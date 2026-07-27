import Tibia12BaiakWikiKeywordPage, { generateMetadata } from './tibia-12-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12BaiakWikiKeywordPage />;
}
