import ActiveLumineraWebsiteKeywordPage, { generateMetadata } from './active-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraWebsiteKeywordPage />;
}
