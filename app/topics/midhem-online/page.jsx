import MidhemOnlineKeywordPage, { generateMetadata } from './midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemOnlineKeywordPage />;
}
