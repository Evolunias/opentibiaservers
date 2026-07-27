import OldSchoolTibiaServerOnlineKeywordPage, { generateMetadata } from './old-school-tibia-server-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerOnlineKeywordPage />;
}
