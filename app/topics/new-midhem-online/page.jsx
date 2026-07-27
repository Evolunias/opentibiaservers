import NewMidhemOnlineKeywordPage, { generateMetadata } from './new-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMidhemOnlineKeywordPage />;
}
