import NoResetCoxaotOnlineKeywordPage, { generateMetadata } from './no-reset-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCoxaotOnlineKeywordPage />;
}
