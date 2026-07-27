import NewGunzodusOtKeywordPage, { generateMetadata } from './new-gunzodus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusOtKeywordPage />;
}
