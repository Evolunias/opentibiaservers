import NewRealestaWikiKeywordPage, { generateMetadata } from './new-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealestaWikiKeywordPage />;
}
