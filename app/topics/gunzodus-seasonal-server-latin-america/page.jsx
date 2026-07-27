import GunzodusSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './gunzodus-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSeasonalServerLatinAmericaKeywordPage />;
}
