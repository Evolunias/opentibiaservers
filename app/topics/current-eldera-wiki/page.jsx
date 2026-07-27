import CurrentElderaWikiKeywordPage, { generateMetadata } from './current-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaWikiKeywordPage />;
}
