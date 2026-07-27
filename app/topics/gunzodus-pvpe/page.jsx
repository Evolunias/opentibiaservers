import GunzodusPvpeKeywordPage, { generateMetadata } from './gunzodus-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusPvpeKeywordPage />;
}
