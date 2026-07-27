import ActiveGunzodusGuideKeywordPage, { generateMetadata } from './active-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusGuideKeywordPage />;
}
