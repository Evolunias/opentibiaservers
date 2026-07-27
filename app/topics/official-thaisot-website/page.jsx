import OfficialThaisotWebsiteKeywordPage, { generateMetadata } from './official-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialThaisotWebsiteKeywordPage />;
}
