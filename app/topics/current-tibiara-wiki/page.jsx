import CurrentTibiaraWikiKeywordPage, { generateMetadata } from './current-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraWikiKeywordPage />;
}
