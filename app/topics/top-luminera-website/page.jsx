import TopLumineraWebsiteKeywordPage, { generateMetadata } from './top-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraWebsiteKeywordPage />;
}
