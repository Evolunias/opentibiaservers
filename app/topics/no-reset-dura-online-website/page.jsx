import NoResetDuraOnlineWebsiteKeywordPage, { generateMetadata } from './no-reset-dura-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineWebsiteKeywordPage />;
}
