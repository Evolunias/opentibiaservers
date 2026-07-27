import ActiveUnlineOnlineKeywordPage, { generateMetadata } from './active-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineOnlineKeywordPage />;
}
