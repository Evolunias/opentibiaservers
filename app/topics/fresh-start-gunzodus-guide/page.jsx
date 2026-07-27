import FreshStartGunzodusGuideKeywordPage, { generateMetadata } from './fresh-start-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGunzodusGuideKeywordPage />;
}
