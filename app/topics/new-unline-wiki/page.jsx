import NewUnlineWikiKeywordPage, { generateMetadata } from './new-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineWikiKeywordPage />;
}
