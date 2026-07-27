import LowrateEvoleraWebsiteKeywordPage, { generateMetadata } from './lowrate-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraWebsiteKeywordPage />;
}
