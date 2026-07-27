import BestArchlightWebsiteKeywordPage, { generateMetadata } from './best-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArchlightWebsiteKeywordPage />;
}
