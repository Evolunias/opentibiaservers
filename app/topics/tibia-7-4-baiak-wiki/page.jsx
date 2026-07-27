import Tibia74BaiakWikiKeywordPage, { generateMetadata } from './tibia-7-4-baiak-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74BaiakWikiKeywordPage />;
}
