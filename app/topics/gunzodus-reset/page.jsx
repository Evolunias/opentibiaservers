import GunzodusResetKeywordPage, { generateMetadata } from './gunzodus-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusResetKeywordPage />;
}
