import Tibia15BaiakWikiKeywordPage, { generateMetadata } from './tibia-15-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15BaiakWikiKeywordPage />;
}
