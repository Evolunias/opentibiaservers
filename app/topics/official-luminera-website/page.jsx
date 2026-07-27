import OfficialLumineraWebsiteKeywordPage, { generateMetadata } from './official-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialLumineraWebsiteKeywordPage />;
}
