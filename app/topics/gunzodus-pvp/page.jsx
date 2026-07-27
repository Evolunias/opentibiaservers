import GunzodusPvpKeywordPage, { generateMetadata } from './gunzodus-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusPvpKeywordPage />;
}
