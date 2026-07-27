import CelestaOnlineKeywordPage, { generateMetadata } from './celesta-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaOnlineKeywordPage />;
}
