import NoResetYurotsWikiKeywordPage, { generateMetadata } from './no-reset-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsWikiKeywordPage />;
}
