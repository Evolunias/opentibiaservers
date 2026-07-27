import OfficialMidhemWebsiteKeywordPage, { generateMetadata } from './official-midhem-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemWebsiteKeywordPage />;
}
