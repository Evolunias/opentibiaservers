import OfficialNilotWikiKeywordPage, { generateMetadata } from './official-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNilotWikiKeywordPage />;
}
