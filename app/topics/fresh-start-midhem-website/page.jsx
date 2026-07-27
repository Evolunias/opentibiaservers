import FreshStartMidhemWebsiteKeywordPage, { generateMetadata } from './fresh-start-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemWebsiteKeywordPage />;
}
