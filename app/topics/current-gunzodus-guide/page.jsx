import CurrentGunzodusGuideKeywordPage, { generateMetadata } from './current-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusGuideKeywordPage />;
}
