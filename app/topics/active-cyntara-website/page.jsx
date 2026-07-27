import ActiveCyntaraWebsiteKeywordPage, { generateMetadata } from './active-cyntara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraWebsiteKeywordPage />;
}
