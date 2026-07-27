import NoResetTibiaraWikiKeywordPage, { generateMetadata } from './no-reset-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraWikiKeywordPage />;
}
