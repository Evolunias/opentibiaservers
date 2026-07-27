import TopZezeniaOnlineLoginKeywordPage, { generateMetadata } from './top-zezenia-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineLoginKeywordPage />;
}
