import FreshStartTibiameWikiKeywordPage, { generateMetadata } from './fresh-start-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiameWikiKeywordPage />;
}
