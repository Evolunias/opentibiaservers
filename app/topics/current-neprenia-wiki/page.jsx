import CurrentNepreniaWikiKeywordPage, { generateMetadata } from './current-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNepreniaWikiKeywordPage />;
}
