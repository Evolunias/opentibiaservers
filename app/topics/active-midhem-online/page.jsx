import ActiveMidhemOnlineKeywordPage, { generateMetadata } from './active-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMidhemOnlineKeywordPage />;
}
