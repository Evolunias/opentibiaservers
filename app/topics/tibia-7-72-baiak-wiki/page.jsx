import Tibia772BaiakWikiKeywordPage, { generateMetadata } from './tibia-7-72-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772BaiakWikiKeywordPage />;
}
