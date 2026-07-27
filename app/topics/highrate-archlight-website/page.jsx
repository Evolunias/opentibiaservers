import HighrateArchlightWebsiteKeywordPage, { generateMetadata } from './highrate-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightWebsiteKeywordPage />;
}
