import OfficialImperianicWikiKeywordPage, { generateMetadata } from './official-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicWikiKeywordPage />;
}
