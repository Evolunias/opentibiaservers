import LowrateLumineraWebsiteKeywordPage, { generateMetadata } from './lowrate-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraWebsiteKeywordPage />;
}
