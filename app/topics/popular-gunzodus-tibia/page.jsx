import PopularGunzodusTibiaKeywordPage, { generateMetadata } from './popular-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusTibiaKeywordPage />;
}
