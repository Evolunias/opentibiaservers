import LowrateCarlinotOnlineKeywordPage, { generateMetadata } from './lowrate-carlinot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCarlinotOnlineKeywordPage />;
}
