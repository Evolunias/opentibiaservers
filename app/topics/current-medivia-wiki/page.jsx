import CurrentMediviaWikiKeywordPage, { generateMetadata } from './current-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaWikiKeywordPage />;
}
