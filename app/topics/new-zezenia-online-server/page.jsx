import NewZezeniaOnlineServerKeywordPage, { generateMetadata } from './new-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZezeniaOnlineServerKeywordPage />;
}
