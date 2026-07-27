import UniteraOnlineKeywordPage, { generateMetadata } from './unitera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UniteraOnlineKeywordPage />;
}
