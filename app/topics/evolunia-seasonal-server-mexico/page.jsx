import EvoluniaSeasonalServerMexicoKeywordPage, { generateMetadata } from './evolunia-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaSeasonalServerMexicoKeywordPage />;
}
