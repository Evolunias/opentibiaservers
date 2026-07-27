import LowrateMidhemWebsiteKeywordPage, { generateMetadata } from './lowrate-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemWebsiteKeywordPage />;
}
