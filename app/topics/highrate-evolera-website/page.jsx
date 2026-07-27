import HighrateEvoleraWebsiteKeywordPage, { generateMetadata } from './highrate-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraWebsiteKeywordPage />;
}
