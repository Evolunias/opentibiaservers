import OfficialTibiaraWikiKeywordPage, { generateMetadata } from './official-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraWikiKeywordPage />;
}
