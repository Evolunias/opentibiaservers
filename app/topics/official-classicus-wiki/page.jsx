import OfficialClassicusWikiKeywordPage, { generateMetadata } from './official-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusWikiKeywordPage />;
}
