import CanobSeasonalServerMexicoKeywordPage, { generateMetadata } from './canob-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobSeasonalServerMexicoKeywordPage />;
}
