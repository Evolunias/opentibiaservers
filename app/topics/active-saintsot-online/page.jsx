import ActiveSaintsotOnlineKeywordPage, { generateMetadata } from './active-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSaintsotOnlineKeywordPage />;
}
