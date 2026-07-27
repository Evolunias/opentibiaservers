import CustomZezeniaOnlineRegisterKeywordPage, { generateMetadata } from './custom-zezenia-online-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineRegisterKeywordPage />;
}
