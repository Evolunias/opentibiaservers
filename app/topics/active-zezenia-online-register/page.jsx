import ActiveZezeniaOnlineRegisterKeywordPage, { generateMetadata } from './active-zezenia-online-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZezeniaOnlineRegisterKeywordPage />;
}
