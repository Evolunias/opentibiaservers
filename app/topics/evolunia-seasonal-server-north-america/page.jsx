import EvoluniaSeasonalServerNorthAmericaKeywordPage, { generateMetadata } from './evolunia-seasonal-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSeasonalServerNorthAmericaKeywordPage />;
}
