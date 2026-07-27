import OldSchoolTibiaraOnlineKeywordPage, { generateMetadata } from './old-school-tibiara-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraOnlineKeywordPage />;
}
