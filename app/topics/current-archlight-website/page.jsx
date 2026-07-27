import CurrentArchlightWebsiteKeywordPage, { generateMetadata } from './current-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightWebsiteKeywordPage />;
}
