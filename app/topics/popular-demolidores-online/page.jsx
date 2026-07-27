import PopularDemolidoresOnlineKeywordPage, { generateMetadata } from './popular-demolidores-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresOnlineKeywordPage />;
}
