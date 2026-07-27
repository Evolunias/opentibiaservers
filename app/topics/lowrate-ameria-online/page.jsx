import LowrateAmeriaOnlineKeywordPage, { generateMetadata } from './lowrate-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAmeriaOnlineKeywordPage />;
}
