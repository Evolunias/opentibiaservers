import PopularArchlightGuideKeywordPage, { generateMetadata } from './popular-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArchlightGuideKeywordPage />;
}
