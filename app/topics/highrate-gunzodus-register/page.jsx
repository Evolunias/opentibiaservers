import HighrateGunzodusRegisterKeywordPage, { generateMetadata } from './highrate-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusRegisterKeywordPage />;
}
