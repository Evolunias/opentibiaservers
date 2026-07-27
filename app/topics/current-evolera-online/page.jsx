import CurrentEvoleraOnlineKeywordPage, { generateMetadata } from './current-evolera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraOnlineKeywordPage />;
}
