import LowrateElderaOnlineKeywordPage, { generateMetadata } from './lowrate-eldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaOnlineKeywordPage />;
}
