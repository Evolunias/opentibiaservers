import EvoleraWebsiteKeywordPage, { generateMetadata } from './evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraWebsiteKeywordPage />;
}
