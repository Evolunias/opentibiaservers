import CurrentOlderaWikiKeywordPage, { generateMetadata } from './current-oldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaWikiKeywordPage />;
}
