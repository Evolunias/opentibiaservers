import GunzodusWarsKeywordPage, { generateMetadata } from './gunzodus-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusWarsKeywordPage />;
}
