import OfficialTibiameWikiKeywordPage, { generateMetadata } from './official-tibiame-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameWikiKeywordPage />;
}
