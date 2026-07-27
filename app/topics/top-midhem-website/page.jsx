import TopMidhemWebsiteKeywordPage, { generateMetadata } from './top-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemWebsiteKeywordPage />;
}
