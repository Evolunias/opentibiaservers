import ActiveTibiameWikiKeywordPage, { generateMetadata } from './active-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiameWikiKeywordPage />;
}
