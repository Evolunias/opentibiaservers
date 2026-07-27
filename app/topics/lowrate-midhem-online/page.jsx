import LowrateMidhemOnlineKeywordPage, { generateMetadata } from './lowrate-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemOnlineKeywordPage />;
}
