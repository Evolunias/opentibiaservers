import NoResetThaisotWikiKeywordPage, { generateMetadata } from './no-reset-thaisot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotWikiKeywordPage />;
}
