import CurrentTibiameWikiKeywordPage, { generateMetadata } from './current-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiameWikiKeywordPage />;
}
