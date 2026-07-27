import MidhemWebsiteKeywordPage, { generateMetadata } from './midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemWebsiteKeywordPage />;
}
