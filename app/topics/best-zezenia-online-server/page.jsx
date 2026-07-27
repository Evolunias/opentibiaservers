import BestZezeniaOnlineServerKeywordPage, { generateMetadata } from './best-zezenia-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZezeniaOnlineServerKeywordPage />;
}
