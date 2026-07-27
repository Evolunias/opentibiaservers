import HighrateZezeniaOnlineWikiKeywordPage, { generateMetadata } from './highrate-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZezeniaOnlineWikiKeywordPage />;
}
