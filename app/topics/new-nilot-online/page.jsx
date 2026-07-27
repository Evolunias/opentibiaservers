import NewNilotOnlineKeywordPage, { generateMetadata } from './new-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotOnlineKeywordPage />;
}
