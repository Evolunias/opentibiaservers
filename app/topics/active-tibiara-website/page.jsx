import ActiveTibiaraWebsiteKeywordPage, { generateMetadata } from './active-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraWebsiteKeywordPage />;
}
