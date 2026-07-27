import CustomGunzodusTibiaKeywordPage, { generateMetadata } from './custom-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusTibiaKeywordPage />;
}
