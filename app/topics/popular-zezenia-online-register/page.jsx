import PopularZezeniaOnlineRegisterKeywordPage, { generateMetadata } from './popular-zezenia-online-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularZezeniaOnlineRegisterKeywordPage />;
}
