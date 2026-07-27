import NoResetCoxaotWikiKeywordPage, { generateMetadata } from './no-reset-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotWikiKeywordPage />;
}
