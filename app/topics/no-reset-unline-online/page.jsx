import NoResetUnlineOnlineKeywordPage, { generateMetadata } from './no-reset-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineOnlineKeywordPage />;
}
