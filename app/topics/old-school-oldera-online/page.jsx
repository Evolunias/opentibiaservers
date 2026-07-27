import OldSchoolOlderaOnlineKeywordPage, { generateMetadata } from './old-school-oldera-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaOnlineKeywordPage />;
}
