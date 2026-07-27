import BestArchlightOtsKeywordPage, { generateMetadata } from './best-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightOtsKeywordPage />;
}
