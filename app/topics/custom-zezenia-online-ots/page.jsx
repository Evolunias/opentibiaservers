import CustomZezeniaOnlineOtsKeywordPage, { generateMetadata } from './custom-zezenia-online-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineOtsKeywordPage />;
}
