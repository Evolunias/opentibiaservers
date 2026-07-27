import FreshStartCoxaotOnlineKeywordPage, { generateMetadata } from './fresh-start-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotOnlineKeywordPage />;
}
