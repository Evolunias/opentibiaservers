import GunzodusMarketKeywordPage, { generateMetadata } from './gunzodus-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusMarketKeywordPage />;
}
