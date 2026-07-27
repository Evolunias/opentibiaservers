import CurrentDuraOnlineOnlineKeywordPage, { generateMetadata } from './current-dura-online-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDuraOnlineOnlineKeywordPage />;
}
