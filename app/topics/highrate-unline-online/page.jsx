import HighrateUnlineOnlineKeywordPage, { generateMetadata } from './highrate-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateUnlineOnlineKeywordPage />;
}
