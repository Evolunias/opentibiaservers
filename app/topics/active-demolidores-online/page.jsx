import ActiveDemolidoresOnlineKeywordPage, { generateMetadata } from './active-demolidores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresOnlineKeywordPage />;
}
