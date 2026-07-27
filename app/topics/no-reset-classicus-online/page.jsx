import NoResetClassicusOnlineKeywordPage, { generateMetadata } from './no-reset-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusOnlineKeywordPage />;
}
