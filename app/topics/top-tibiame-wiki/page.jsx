import TopTibiameWikiKeywordPage, { generateMetadata } from './top-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameWikiKeywordPage />;
}
