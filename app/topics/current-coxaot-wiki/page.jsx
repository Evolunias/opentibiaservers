import CurrentCoxaotWikiKeywordPage, { generateMetadata } from './current-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCoxaotWikiKeywordPage />;
}
