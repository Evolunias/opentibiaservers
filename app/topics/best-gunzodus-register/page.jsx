import BestGunzodusRegisterKeywordPage, { generateMetadata } from './best-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusRegisterKeywordPage />;
}
