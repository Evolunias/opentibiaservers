import NewSeasonGunzodusTibiaKeywordPage, { generateMetadata } from './new-season-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusTibiaKeywordPage />;
}
