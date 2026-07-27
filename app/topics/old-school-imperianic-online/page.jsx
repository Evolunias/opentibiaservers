import OldSchoolImperianicOnlineKeywordPage, { generateMetadata } from './old-school-imperianic-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicOnlineKeywordPage />;
}
