import FreshStartCyntaraWebsiteKeywordPage, { generateMetadata } from './fresh-start-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraWebsiteKeywordPage />;
}
