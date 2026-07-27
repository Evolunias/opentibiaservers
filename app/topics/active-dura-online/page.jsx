import ActiveDuraOnlineKeywordPage, { generateMetadata } from './active-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDuraOnlineKeywordPage />;
}
