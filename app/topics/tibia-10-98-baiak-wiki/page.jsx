import Tibia1098BaiakWikiKeywordPage, { generateMetadata } from './tibia-10-98-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098BaiakWikiKeywordPage />;
}
