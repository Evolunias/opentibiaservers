import NoResetNtoStarOnlineKeywordPage, { generateMetadata } from './no-reset-nto-star-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarOnlineKeywordPage />;
}
