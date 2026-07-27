import FreshStartLumineraWebsiteKeywordPage, { generateMetadata } from './fresh-start-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartLumineraWebsiteKeywordPage />;
}
