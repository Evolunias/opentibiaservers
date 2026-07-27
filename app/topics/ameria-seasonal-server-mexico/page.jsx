import AmeriaSeasonalServerMexicoKeywordPage, { generateMetadata } from './ameria-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonalServerMexicoKeywordPage />;
}
