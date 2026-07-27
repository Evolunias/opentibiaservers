import EvoluniaSeasonalServerSouthAmericaKeywordPage, { generateMetadata } from './evolunia-seasonal-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSeasonalServerSouthAmericaKeywordPage />;
}
