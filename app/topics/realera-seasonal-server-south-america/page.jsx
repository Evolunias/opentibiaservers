import RealeraSeasonalServerSouthAmericaKeywordPage, { generateMetadata } from './realera-seasonal-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSeasonalServerSouthAmericaKeywordPage />;
}
