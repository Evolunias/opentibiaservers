import TopDuraOnlineClientKeywordPage, { generateMetadata } from './top-dura-online-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDuraOnlineClientKeywordPage />;
}
