import ActiveTibianusOnlineKeywordPage, { generateMetadata } from './active-tibianus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusOnlineKeywordPage />;
}
