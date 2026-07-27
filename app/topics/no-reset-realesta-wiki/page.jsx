import NoResetRealestaWikiKeywordPage, { generateMetadata } from './no-reset-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealestaWikiKeywordPage />;
}
