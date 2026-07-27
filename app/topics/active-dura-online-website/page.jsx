import ActiveDuraOnlineWebsiteKeywordPage, { generateMetadata } from './active-dura-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineWebsiteKeywordPage />;
}
