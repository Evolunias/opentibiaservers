import CurrentGunzodusTibiaKeywordPage, { generateMetadata } from './current-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusTibiaKeywordPage />;
}
