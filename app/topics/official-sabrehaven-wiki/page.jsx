import OfficialSabrehavenWikiKeywordPage, { generateMetadata } from './official-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenWikiKeywordPage />;
}
