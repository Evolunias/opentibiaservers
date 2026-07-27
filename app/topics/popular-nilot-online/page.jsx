import PopularNilotOnlineKeywordPage, { generateMetadata } from './popular-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotOnlineKeywordPage />;
}
