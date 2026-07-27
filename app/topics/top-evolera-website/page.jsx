import TopEvoleraWebsiteKeywordPage, { generateMetadata } from './top-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraWebsiteKeywordPage />;
}
