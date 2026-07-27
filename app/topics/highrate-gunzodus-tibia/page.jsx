import HighrateGunzodusTibiaKeywordPage, { generateMetadata } from './highrate-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusTibiaKeywordPage />;
}
