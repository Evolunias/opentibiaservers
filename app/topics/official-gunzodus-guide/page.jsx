import OfficialGunzodusGuideKeywordPage, { generateMetadata } from './official-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusGuideKeywordPage />;
}
