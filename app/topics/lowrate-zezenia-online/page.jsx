import LowrateZezeniaOnlineKeywordPage, { generateMetadata } from './lowrate-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZezeniaOnlineKeywordPage />;
}
