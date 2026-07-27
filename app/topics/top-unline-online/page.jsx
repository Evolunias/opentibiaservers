import TopUnlineOnlineKeywordPage, { generateMetadata } from './top-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineOnlineKeywordPage />;
}
