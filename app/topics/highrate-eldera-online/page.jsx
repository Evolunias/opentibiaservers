import HighrateElderaOnlineKeywordPage, { generateMetadata } from './highrate-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateElderaOnlineKeywordPage />;
}
