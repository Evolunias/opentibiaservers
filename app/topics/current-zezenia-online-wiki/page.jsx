import CurrentZezeniaOnlineWikiKeywordPage, { generateMetadata } from './current-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineWikiKeywordPage />;
}
