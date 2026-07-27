import NewBlazeraWikiKeywordPage, { generateMetadata } from './new-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraWikiKeywordPage />;
}
