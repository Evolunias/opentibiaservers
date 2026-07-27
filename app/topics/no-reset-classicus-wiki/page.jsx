import NoResetClassicusWikiKeywordPage, { generateMetadata } from './no-reset-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusWikiKeywordPage />;
}
