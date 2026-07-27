import OfficialEvoleraWebsiteKeywordPage, { generateMetadata } from './official-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEvoleraWebsiteKeywordPage />;
}
