import NewGunzodusOpenTibiaKeywordPage, { generateMetadata } from './new-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusOpenTibiaKeywordPage />;
}
