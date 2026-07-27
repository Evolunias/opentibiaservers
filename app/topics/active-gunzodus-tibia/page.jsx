import ActiveGunzodusTibiaKeywordPage, { generateMetadata } from './active-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusTibiaKeywordPage />;
}
