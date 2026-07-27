import NewGunzodusTibiaKeywordPage, { generateMetadata } from './new-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusTibiaKeywordPage />;
}
