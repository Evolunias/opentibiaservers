import GunzodusPolandServerKeywordPage, { generateMetadata } from './gunzodus-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusPolandServerKeywordPage />;
}
