import NewEvoleraWebsiteKeywordPage, { generateMetadata } from './new-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraWebsiteKeywordPage />;
}
