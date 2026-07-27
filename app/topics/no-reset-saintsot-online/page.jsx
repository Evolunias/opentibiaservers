import NoResetSaintsotOnlineKeywordPage, { generateMetadata } from './no-reset-saintsot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotOnlineKeywordPage />;
}
