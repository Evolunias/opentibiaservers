import PopularNostaltherOnlineKeywordPage, { generateMetadata } from './popular-nostalther-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNostaltherOnlineKeywordPage />;
}
