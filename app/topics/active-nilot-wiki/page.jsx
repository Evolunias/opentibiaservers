import ActiveNilotWikiKeywordPage, { generateMetadata } from './active-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotWikiKeywordPage />;
}
