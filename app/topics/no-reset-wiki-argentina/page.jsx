import NoResetWikiArgentinaKeywordPage, { generateMetadata } from './no-reset-wiki-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiArgentinaKeywordPage />;
}
