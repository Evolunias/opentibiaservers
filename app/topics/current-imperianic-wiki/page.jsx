import CurrentImperianicWikiKeywordPage, { generateMetadata } from './current-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicWikiKeywordPage />;
}
