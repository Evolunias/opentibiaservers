import CurrentMidhemOnlineKeywordPage, { generateMetadata } from './current-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemOnlineKeywordPage />;
}
