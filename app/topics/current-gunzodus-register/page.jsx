import CurrentGunzodusRegisterKeywordPage, { generateMetadata } from './current-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusRegisterKeywordPage />;
}
