import HighrateLumineraWebsiteKeywordPage, { generateMetadata } from './highrate-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraWebsiteKeywordPage />;
}
