import NoResetArchlightWebsiteKeywordPage, { generateMetadata } from './no-reset-archlight-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightWebsiteKeywordPage />;
}
