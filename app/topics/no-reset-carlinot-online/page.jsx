import NoResetCarlinotOnlineKeywordPage, { generateMetadata } from './no-reset-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotOnlineKeywordPage />;
}
