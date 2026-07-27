import BestZezeniaOnlineWikiKeywordPage, { generateMetadata } from './best-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZezeniaOnlineWikiKeywordPage />;
}
