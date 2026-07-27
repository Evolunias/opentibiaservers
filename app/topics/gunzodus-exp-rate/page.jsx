import GunzodusExpRateKeywordPage, { generateMetadata } from './gunzodus-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusExpRateKeywordPage />;
}
