import NoResetWikiLatinAmericaKeywordPage, { generateMetadata } from './no-reset-wiki-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiLatinAmericaKeywordPage />;
}
