import HighrateAmeriaOnlineKeywordPage, { generateMetadata } from './highrate-ameria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateAmeriaOnlineKeywordPage />;
}
