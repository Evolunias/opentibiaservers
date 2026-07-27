import NoxiousotSeasonalServerCanadaKeywordPage, { generateMetadata } from './noxiousot-seasonal-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoxiousotSeasonalServerCanadaKeywordPage />;
}
