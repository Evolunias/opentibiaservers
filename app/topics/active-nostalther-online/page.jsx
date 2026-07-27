import ActiveNostaltherOnlineKeywordPage, { generateMetadata } from './active-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherOnlineKeywordPage />;
}
