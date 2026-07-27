import ActiveEvoleraWebsiteKeywordPage, { generateMetadata } from './active-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraWebsiteKeywordPage />;
}
