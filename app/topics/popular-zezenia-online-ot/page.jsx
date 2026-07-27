import PopularZezeniaOnlineOtKeywordPage, { generateMetadata } from './popular-zezenia-online-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlineOtKeywordPage />;
}
