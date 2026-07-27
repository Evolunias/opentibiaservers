import TopEvoleraOnlineKeywordPage, { generateMetadata } from './top-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraOnlineKeywordPage />;
}
