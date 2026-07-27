import CustomZezeniaOnlineWikiKeywordPage, { generateMetadata } from './custom-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineWikiKeywordPage />;
}
