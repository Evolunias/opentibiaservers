import CurrentZezeniaOnlineLoginKeywordPage, { generateMetadata } from './current-zezenia-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZezeniaOnlineLoginKeywordPage />;
}
