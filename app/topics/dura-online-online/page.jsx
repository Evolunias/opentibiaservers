import DuraOnlineOnlineKeywordPage, { generateMetadata } from './dura-online-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineOnlineKeywordPage />;
}
