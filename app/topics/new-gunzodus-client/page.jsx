import NewGunzodusClientKeywordPage, { generateMetadata } from './new-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusClientKeywordPage />;
}
