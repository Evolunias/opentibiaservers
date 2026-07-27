import NewGunzodusKeywordPage, { generateMetadata } from './new-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusKeywordPage />;
}
