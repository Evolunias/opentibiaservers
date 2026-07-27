import CurrentCanobWikiKeywordPage, { generateMetadata } from './current-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobWikiKeywordPage />;
}
