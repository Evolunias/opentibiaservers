import NoResetNilotWikiKeywordPage, { generateMetadata } from './no-reset-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotWikiKeywordPage />;
}
