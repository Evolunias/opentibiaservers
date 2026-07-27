import NoResetWikiMexicoKeywordPage, { generateMetadata } from './no-reset-wiki-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetWikiMexicoKeywordPage />;
}
