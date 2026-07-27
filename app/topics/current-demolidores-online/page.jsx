import CurrentDemolidoresOnlineKeywordPage, { generateMetadata } from './current-demolidores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresOnlineKeywordPage />;
}
