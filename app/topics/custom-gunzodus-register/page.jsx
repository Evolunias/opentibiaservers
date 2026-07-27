import CustomGunzodusRegisterKeywordPage, { generateMetadata } from './custom-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusRegisterKeywordPage />;
}
