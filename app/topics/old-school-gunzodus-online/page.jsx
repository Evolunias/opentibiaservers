import OldSchoolGunzodusOnlineKeywordPage, { generateMetadata } from './old-school-gunzodus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusOnlineKeywordPage />;
}
