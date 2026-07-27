import BestGunzodusOtServerKeywordPage, { generateMetadata } from './best-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusOtServerKeywordPage />;
}
