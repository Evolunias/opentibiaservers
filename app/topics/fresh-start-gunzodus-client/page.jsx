import FreshStartGunzodusClientKeywordPage, { generateMetadata } from './fresh-start-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGunzodusClientKeywordPage />;
}
