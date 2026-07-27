import NewSeasonZezeniaOnlineWikiKeywordPage, { generateMetadata } from './new-season-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonZezeniaOnlineWikiKeywordPage />;
}
