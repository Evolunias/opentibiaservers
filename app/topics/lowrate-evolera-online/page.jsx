import LowrateEvoleraOnlineKeywordPage, { generateMetadata } from './lowrate-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraOnlineKeywordPage />;
}
