import TopZezeniaOnlineServerKeywordPage, { generateMetadata } from './top-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineServerKeywordPage />;
}
