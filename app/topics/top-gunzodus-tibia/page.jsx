import TopGunzodusTibiaKeywordPage, { generateMetadata } from './top-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusTibiaKeywordPage />;
}
