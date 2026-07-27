import NewGunzodusRegisterKeywordPage, { generateMetadata } from './new-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusRegisterKeywordPage />;
}
