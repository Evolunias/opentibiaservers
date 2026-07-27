import TopZezeniaOnlineWikiKeywordPage, { generateMetadata } from './top-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineWikiKeywordPage />;
}
