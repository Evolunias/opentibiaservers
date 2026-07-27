import HighrateEvoleraOnlineKeywordPage, { generateMetadata } from './highrate-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraOnlineKeywordPage />;
}
