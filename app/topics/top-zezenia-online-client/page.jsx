import TopZezeniaOnlineClientKeywordPage, { generateMetadata } from './top-zezenia-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineClientKeywordPage />;
}
