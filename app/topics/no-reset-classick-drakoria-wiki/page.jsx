import NoResetClassickDrakoriaWikiKeywordPage, { generateMetadata } from './no-reset-classick-drakoria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassickDrakoriaWikiKeywordPage />;
}
