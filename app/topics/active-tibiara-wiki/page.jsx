import ActiveTibiaraWikiKeywordPage, { generateMetadata } from './active-tibiara-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraWikiKeywordPage />;
}
