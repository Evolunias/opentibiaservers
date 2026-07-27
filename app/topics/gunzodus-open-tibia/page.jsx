import GunzodusOpenTibiaKeywordPage, { generateMetadata } from './gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusOpenTibiaKeywordPage />;
}
