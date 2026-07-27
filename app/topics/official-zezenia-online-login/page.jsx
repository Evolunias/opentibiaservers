import OfficialZezeniaOnlineLoginKeywordPage, { generateMetadata } from './official-zezenia-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZezeniaOnlineLoginKeywordPage />;
}
