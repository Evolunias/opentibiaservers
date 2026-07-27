import BestArchlightServerKeywordPage, { generateMetadata } from './best-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightServerKeywordPage />;
}
