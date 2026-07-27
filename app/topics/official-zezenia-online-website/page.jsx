import OfficialZezeniaOnlineWebsiteKeywordPage, { generateMetadata } from './official-zezenia-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineWebsiteKeywordPage />;
}
