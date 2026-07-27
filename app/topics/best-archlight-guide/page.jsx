import BestArchlightGuideKeywordPage, { generateMetadata } from './best-archlight-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightGuideKeywordPage />;
}
