import Tibia80BaiakWikiKeywordPage, { generateMetadata } from './tibia-8-0-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80BaiakWikiKeywordPage />;
}
