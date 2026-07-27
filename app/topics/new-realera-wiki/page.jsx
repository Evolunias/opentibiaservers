import NewRealeraWikiKeywordPage, { generateMetadata } from './new-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraWikiKeywordPage />;
}
