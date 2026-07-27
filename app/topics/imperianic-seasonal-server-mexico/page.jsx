import ImperianicSeasonalServerMexicoKeywordPage, { generateMetadata } from './imperianic-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicSeasonalServerMexicoKeywordPage />;
}
