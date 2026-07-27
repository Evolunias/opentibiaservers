import BestNilotOnlineKeywordPage, { generateMetadata } from './best-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotOnlineKeywordPage />;
}
