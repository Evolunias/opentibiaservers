import NoResetMediviaWikiKeywordPage, { generateMetadata } from './no-reset-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaWikiKeywordPage />;
}
