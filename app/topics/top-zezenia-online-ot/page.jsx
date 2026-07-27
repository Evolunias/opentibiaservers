import TopZezeniaOnlineOtKeywordPage, { generateMetadata } from './top-zezenia-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZezeniaOnlineOtKeywordPage />;
}
