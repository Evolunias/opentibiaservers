import TopArchlightWebsiteKeywordPage, { generateMetadata } from './top-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightWebsiteKeywordPage />;
}
