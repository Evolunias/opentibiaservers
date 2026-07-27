import HighExpGunzodusServerKeywordPage, { generateMetadata } from './high-exp-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGunzodusServerKeywordPage />;
}
