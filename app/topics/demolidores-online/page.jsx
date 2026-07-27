import DemolidoresOnlineKeywordPage, { generateMetadata } from './demolidores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresOnlineKeywordPage />;
}
