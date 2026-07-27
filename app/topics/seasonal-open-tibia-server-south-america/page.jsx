import SeasonalOpenTibiaServerSouthAmericaKeywordPage, { generateMetadata } from './seasonal-open-tibia-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalOpenTibiaServerSouthAmericaKeywordPage />;
}
