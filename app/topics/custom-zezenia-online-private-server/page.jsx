import CustomZezeniaOnlinePrivateServerKeywordPage, { generateMetadata } from './custom-zezenia-online-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlinePrivateServerKeywordPage />;
}
