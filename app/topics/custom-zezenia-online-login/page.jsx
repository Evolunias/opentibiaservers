import CustomZezeniaOnlineLoginKeywordPage, { generateMetadata } from './custom-zezenia-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomZezeniaOnlineLoginKeywordPage />;
}
