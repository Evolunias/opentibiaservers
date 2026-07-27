import OldSchoolVenoreotOnlineKeywordPage, { generateMetadata } from './old-school-venoreot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolVenoreotOnlineKeywordPage />;
}
