import GunzodusSeasonalServerFranceKeywordPage, { generateMetadata } from './gunzodus-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSeasonalServerFranceKeywordPage />;
}
