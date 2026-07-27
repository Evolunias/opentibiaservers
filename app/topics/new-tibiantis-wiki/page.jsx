import NewTibiantisWikiKeywordPage, { generateMetadata } from './new-tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiantisWikiKeywordPage />;
}
