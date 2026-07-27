import OldSchoolGunzodusPrivateServerKeywordPage, { generateMetadata } from './old-school-gunzodus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusPrivateServerKeywordPage />;
}
