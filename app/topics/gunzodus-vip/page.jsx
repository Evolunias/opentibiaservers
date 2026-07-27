import GunzodusVipKeywordPage, { generateMetadata } from './gunzodus-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusVipKeywordPage />;
}
