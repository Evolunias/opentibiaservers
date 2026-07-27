import CurrentSabrehavenWikiKeywordPage, { generateMetadata } from './current-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenWikiKeywordPage />;
}
