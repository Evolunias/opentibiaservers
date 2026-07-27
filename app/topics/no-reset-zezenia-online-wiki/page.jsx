import NoResetZezeniaOnlineWikiKeywordPage, { generateMetadata } from './no-reset-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetZezeniaOnlineWikiKeywordPage />;
}
