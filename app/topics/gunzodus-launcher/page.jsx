import GunzodusLauncherKeywordPage, { generateMetadata } from './gunzodus-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusLauncherKeywordPage />;
}
