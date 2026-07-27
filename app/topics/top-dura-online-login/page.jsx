import TopDuraOnlineLoginKeywordPage, { generateMetadata } from './top-dura-online-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDuraOnlineLoginKeywordPage />;
}
