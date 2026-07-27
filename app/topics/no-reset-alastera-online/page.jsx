import NoResetAlasteraOnlineKeywordPage, { generateMetadata } from './no-reset-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraOnlineKeywordPage />;
}
