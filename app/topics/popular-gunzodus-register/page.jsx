import PopularGunzodusRegisterKeywordPage, { generateMetadata } from './popular-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusRegisterKeywordPage />;
}
