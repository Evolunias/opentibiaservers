import CurrentTibijkaWikiKeywordPage, { generateMetadata } from './current-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaWikiKeywordPage />;
}
