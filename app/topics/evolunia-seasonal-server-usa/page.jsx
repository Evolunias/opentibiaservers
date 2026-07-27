import EvoluniaSeasonalServerUsaKeywordPage, { generateMetadata } from './evolunia-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSeasonalServerUsaKeywordPage />;
}
