import NoResetNilotOnlineKeywordPage, { generateMetadata } from './no-reset-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotOnlineKeywordPage />;
}
