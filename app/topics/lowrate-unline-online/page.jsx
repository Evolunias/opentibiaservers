import LowrateUnlineOnlineKeywordPage, { generateMetadata } from './lowrate-unline-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateUnlineOnlineKeywordPage />;
}
