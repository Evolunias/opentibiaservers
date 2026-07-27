import ActiveImperianicWebsiteKeywordPage, { generateMetadata } from './active-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicWebsiteKeywordPage />;
}
