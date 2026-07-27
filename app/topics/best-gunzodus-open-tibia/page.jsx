import BestGunzodusOpenTibiaKeywordPage, { generateMetadata } from './best-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusOpenTibiaKeywordPage />;
}
