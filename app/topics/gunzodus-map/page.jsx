import GunzodusMapKeywordPage, { generateMetadata } from './gunzodus-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusMapKeywordPage />;
}
