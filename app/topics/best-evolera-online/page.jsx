import BestEvoleraOnlineKeywordPage, { generateMetadata } from './best-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraOnlineKeywordPage />;
}
