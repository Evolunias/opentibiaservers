import Tibia100BaiakWikiKeywordPage, { generateMetadata } from './tibia-10-0-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100BaiakWikiKeywordPage />;
}
