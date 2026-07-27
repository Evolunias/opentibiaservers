import BestGunzodusClientKeywordPage, { generateMetadata } from './best-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusClientKeywordPage />;
}
