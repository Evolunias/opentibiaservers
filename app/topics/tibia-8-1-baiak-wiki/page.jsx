import Tibia81BaiakWikiKeywordPage, { generateMetadata } from './tibia-8-1-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81BaiakWikiKeywordPage />;
}
