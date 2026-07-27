import NoResetSabrehavenWikiKeywordPage, { generateMetadata } from './no-reset-sabrehaven-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenWikiKeywordPage />;
}
