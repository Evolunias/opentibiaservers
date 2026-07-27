import ActiveZezeniaOnlineWebsiteKeywordPage, { generateMetadata } from './active-zezenia-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZezeniaOnlineWebsiteKeywordPage />;
}
