import CurrentMidhemWebsiteKeywordPage, { generateMetadata } from './current-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemWebsiteKeywordPage />;
}
