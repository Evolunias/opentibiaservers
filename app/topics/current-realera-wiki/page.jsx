import CurrentRealeraWikiKeywordPage, { generateMetadata } from './current-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraWikiKeywordPage />;
}
