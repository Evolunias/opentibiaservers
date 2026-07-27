import NewTibiameWikiKeywordPage, { generateMetadata } from './new-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiameWikiKeywordPage />;
}
