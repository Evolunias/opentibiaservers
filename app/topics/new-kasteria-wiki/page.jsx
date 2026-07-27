import NewKasteriaWikiKeywordPage, { generateMetadata } from './new-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaWikiKeywordPage />;
}
