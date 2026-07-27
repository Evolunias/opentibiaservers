import ActiveRealeraWebsiteKeywordPage, { generateMetadata } from './active-realera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraWebsiteKeywordPage />;
}
