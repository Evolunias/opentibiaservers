import FreshStartEvoleraWebsiteKeywordPage, { generateMetadata } from './fresh-start-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoleraWebsiteKeywordPage />;
}
