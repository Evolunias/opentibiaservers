import TopZezeniaOnlineOtServerKeywordPage, { generateMetadata } from './top-zezenia-online-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineOtServerKeywordPage />;
}
