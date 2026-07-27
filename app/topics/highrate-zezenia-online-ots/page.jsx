import HighrateZezeniaOnlineOtsKeywordPage, { generateMetadata } from './highrate-zezenia-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZezeniaOnlineOtsKeywordPage />;
}
