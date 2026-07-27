import BestZezeniaOnlineOtsKeywordPage, { generateMetadata } from './best-zezenia-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZezeniaOnlineOtsKeywordPage />;
}
