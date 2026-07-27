import TopZezeniaOnlineGuideKeywordPage, { generateMetadata } from './top-zezenia-online-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineGuideKeywordPage />;
}
