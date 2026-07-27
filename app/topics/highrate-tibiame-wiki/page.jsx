import HighrateTibiameWikiKeywordPage, { generateMetadata } from './highrate-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameWikiKeywordPage />;
}
