import OfficialSerenityWikiKeywordPage, { generateMetadata } from './official-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSerenityWikiKeywordPage />;
}
