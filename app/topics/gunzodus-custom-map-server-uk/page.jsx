import GunzodusCustomMapServerUkKeywordPage, { generateMetadata } from './gunzodus-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusCustomMapServerUkKeywordPage />;
}
