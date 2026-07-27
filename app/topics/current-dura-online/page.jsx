import CurrentDuraOnlineKeywordPage, { generateMetadata } from './current-dura-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDuraOnlineKeywordPage />;
}
