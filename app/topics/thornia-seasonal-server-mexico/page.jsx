import ThorniaSeasonalServerMexicoKeywordPage, { generateMetadata } from './thornia-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaSeasonalServerMexicoKeywordPage />;
}
