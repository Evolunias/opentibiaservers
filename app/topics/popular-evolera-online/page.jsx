import PopularEvoleraOnlineKeywordPage, { generateMetadata } from './popular-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraOnlineKeywordPage />;
}
