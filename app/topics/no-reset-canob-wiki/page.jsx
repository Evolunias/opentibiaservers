import NoResetCanobWikiKeywordPage, { generateMetadata } from './no-reset-canob-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCanobWikiKeywordPage />;
}
