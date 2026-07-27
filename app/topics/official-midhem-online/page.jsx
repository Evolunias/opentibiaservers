import OfficialMidhemOnlineKeywordPage, { generateMetadata } from './official-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMidhemOnlineKeywordPage />;
}
