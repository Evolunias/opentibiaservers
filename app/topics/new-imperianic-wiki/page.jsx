import NewImperianicWikiKeywordPage, { generateMetadata } from './new-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicWikiKeywordPage />;
}
