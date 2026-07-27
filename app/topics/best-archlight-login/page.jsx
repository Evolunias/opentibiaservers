import BestArchlightLoginKeywordPage, { generateMetadata } from './best-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightLoginKeywordPage />;
}
