import CustomArchlightGuideKeywordPage, { generateMetadata } from './custom-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightGuideKeywordPage />;
}
