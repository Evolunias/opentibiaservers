import LowrateZezeniaOnlineOtsKeywordPage, { generateMetadata } from './lowrate-zezenia-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZezeniaOnlineOtsKeywordPage />;
}
