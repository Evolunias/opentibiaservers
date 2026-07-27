import CustomGunzodusOpenTibiaKeywordPage, { generateMetadata } from './custom-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusOpenTibiaKeywordPage />;
}
