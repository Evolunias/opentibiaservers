import LowExpGunzodusServerKeywordPage, { generateMetadata } from './low-exp-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpGunzodusServerKeywordPage />;
}
