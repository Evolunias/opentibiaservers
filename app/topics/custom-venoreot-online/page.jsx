import CustomVenoreotOnlineKeywordPage, { generateMetadata } from './custom-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotOnlineKeywordPage />;
}
