import NoResetWikiUkKeywordPage, { generateMetadata } from './no-reset-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiUkKeywordPage />;
}
