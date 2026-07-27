import DuraOnlineWebsiteKeywordPage, { generateMetadata } from './dura-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineWebsiteKeywordPage />;
}
