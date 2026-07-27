import SeasonalOpenTibiaServerCanadaKeywordPage, { generateMetadata } from './seasonal-open-tibia-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOpenTibiaServerCanadaKeywordPage />;
}
