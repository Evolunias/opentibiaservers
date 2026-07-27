import NoResetDuraOnlineKeywordPage, { generateMetadata } from './no-reset-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineKeywordPage />;
}
