import MorganaOnlineKeywordPage, { generateMetadata } from './morgana-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaOnlineKeywordPage />;
}
