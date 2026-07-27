import ActiveBlazeraWikiKeywordPage, { generateMetadata } from './active-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveBlazeraWikiKeywordPage />;
}
