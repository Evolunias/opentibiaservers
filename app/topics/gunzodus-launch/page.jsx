import GunzodusLaunchKeywordPage, { generateMetadata } from './gunzodus-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusLaunchKeywordPage />;
}
