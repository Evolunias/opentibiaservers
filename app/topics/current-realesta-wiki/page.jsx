import CurrentRealestaWikiKeywordPage, { generateMetadata } from './current-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealestaWikiKeywordPage />;
}
