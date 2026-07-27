import ActiveNilotOnlineKeywordPage, { generateMetadata } from './active-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotOnlineKeywordPage />;
}
