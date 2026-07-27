import NoResetAureraGlobalWikiKeywordPage, { generateMetadata } from './no-reset-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAureraGlobalWikiKeywordPage />;
}
