import CurrentClassicusWikiKeywordPage, { generateMetadata } from './current-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusWikiKeywordPage />;
}
