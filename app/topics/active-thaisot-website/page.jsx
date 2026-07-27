import ActiveThaisotWebsiteKeywordPage, { generateMetadata } from './active-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotWebsiteKeywordPage />;
}
