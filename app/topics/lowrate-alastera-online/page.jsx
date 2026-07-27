import LowrateAlasteraOnlineKeywordPage, { generateMetadata } from './lowrate-alastera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraOnlineKeywordPage />;
}
