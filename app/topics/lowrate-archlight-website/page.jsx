import LowrateArchlightWebsiteKeywordPage, { generateMetadata } from './lowrate-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArchlightWebsiteKeywordPage />;
}
