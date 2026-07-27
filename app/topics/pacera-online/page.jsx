import PaceraOnlineKeywordPage, { generateMetadata } from './pacera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraOnlineKeywordPage />;
}
