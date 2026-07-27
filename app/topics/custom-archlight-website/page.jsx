import CustomArchlightWebsiteKeywordPage, { generateMetadata } from './custom-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightWebsiteKeywordPage />;
}
