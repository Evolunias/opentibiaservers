import BestMidhemOnlineKeywordPage, { generateMetadata } from './best-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestMidhemOnlineKeywordPage />;
}
