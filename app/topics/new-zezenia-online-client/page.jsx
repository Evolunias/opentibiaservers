import NewZezeniaOnlineClientKeywordPage, { generateMetadata } from './new-zezenia-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZezeniaOnlineClientKeywordPage />;
}
