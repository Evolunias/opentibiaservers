import OfficialZezeniaOnlineWikiKeywordPage, { generateMetadata } from './official-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineWikiKeywordPage />;
}
