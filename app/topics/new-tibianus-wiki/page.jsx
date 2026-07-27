import NewTibianusWikiKeywordPage, { generateMetadata } from './new-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusWikiKeywordPage />;
}
