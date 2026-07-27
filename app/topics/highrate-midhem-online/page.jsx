import HighrateMidhemOnlineKeywordPage, { generateMetadata } from './highrate-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMidhemOnlineKeywordPage />;
}
