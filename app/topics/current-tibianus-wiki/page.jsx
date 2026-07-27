import CurrentTibianusWikiKeywordPage, { generateMetadata } from './current-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusWikiKeywordPage />;
}
