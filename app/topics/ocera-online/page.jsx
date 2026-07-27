import OceraOnlineKeywordPage, { generateMetadata } from './ocera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraOnlineKeywordPage />;
}
