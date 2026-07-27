import FreshStartGunzodusKeywordPage, { generateMetadata } from './fresh-start-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGunzodusKeywordPage />;
}
