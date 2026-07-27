import TopNilotOnlineKeywordPage, { generateMetadata } from './top-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotOnlineKeywordPage />;
}
