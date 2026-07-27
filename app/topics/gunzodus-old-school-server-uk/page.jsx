import GunzodusOldSchoolServerUkKeywordPage, { generateMetadata } from './gunzodus-old-school-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusOldSchoolServerUkKeywordPage />;
}
