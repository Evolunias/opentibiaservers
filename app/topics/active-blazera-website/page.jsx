import ActiveBlazeraWebsiteKeywordPage, { generateMetadata } from './active-blazera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraWebsiteKeywordPage />;
}
