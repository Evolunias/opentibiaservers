import MyaacOnlineKeywordPage, { generateMetadata } from './myaac-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacOnlineKeywordPage />;
}
