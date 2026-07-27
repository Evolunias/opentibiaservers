import LowrateZezeniaOnlineWikiKeywordPage, { generateMetadata } from './lowrate-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZezeniaOnlineWikiKeywordPage />;
}
