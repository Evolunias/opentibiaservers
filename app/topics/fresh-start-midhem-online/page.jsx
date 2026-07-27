import FreshStartMidhemOnlineKeywordPage, { generateMetadata } from './fresh-start-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemOnlineKeywordPage />;
}
