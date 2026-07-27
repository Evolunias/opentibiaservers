import CurrentYurotsWikiKeywordPage, { generateMetadata } from './current-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsWikiKeywordPage />;
}
