import CurrentKasteriaWikiKeywordPage, { generateMetadata } from './current-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaWikiKeywordPage />;
}
