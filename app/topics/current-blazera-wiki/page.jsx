import CurrentBlazeraWikiKeywordPage, { generateMetadata } from './current-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraWikiKeywordPage />;
}
