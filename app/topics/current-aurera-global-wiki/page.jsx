import CurrentAureraGlobalWikiKeywordPage, { generateMetadata } from './current-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalWikiKeywordPage />;
}
