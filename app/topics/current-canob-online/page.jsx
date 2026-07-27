import CurrentCanobOnlineKeywordPage, { generateMetadata } from './current-canob-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCanobOnlineKeywordPage />;
}
