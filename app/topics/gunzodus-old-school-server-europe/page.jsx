import GunzodusOldSchoolServerEuropeKeywordPage, { generateMetadata } from './gunzodus-old-school-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusOldSchoolServerEuropeKeywordPage />;
}
