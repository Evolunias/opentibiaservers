import HighrateNilotOnlineKeywordPage, { generateMetadata } from './highrate-nilot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotOnlineKeywordPage />;
}
