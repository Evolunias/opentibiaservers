import OfficialNilotWebsiteKeywordPage, { generateMetadata } from './official-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotWebsiteKeywordPage />;
}
