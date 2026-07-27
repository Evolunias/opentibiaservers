import NoResetMediviaOnlineKeywordPage, { generateMetadata } from './no-reset-medivia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaOnlineKeywordPage />;
}
