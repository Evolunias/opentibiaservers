import LowrateZezeniaOnlineOtKeywordPage, { generateMetadata } from './lowrate-zezenia-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZezeniaOnlineOtKeywordPage />;
}
