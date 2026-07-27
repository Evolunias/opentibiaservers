import GunzodusBossesKeywordPage, { generateMetadata } from './gunzodus-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusBossesKeywordPage />;
}
