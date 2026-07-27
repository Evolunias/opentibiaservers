import NoResetArchlightOnlineKeywordPage, { generateMetadata } from './no-reset-archlight-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightOnlineKeywordPage />;
}
