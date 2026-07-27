import BestGunzodusLoginKeywordPage, { generateMetadata } from './best-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusLoginKeywordPage />;
}
