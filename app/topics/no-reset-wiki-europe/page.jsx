import NoResetWikiEuropeKeywordPage, { generateMetadata } from './no-reset-wiki-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiEuropeKeywordPage />;
}
