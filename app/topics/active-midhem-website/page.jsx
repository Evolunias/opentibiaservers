import ActiveMidhemWebsiteKeywordPage, { generateMetadata } from './active-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemWebsiteKeywordPage />;
}
