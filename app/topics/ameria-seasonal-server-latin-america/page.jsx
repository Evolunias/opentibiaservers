import AmeriaSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './ameria-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonalServerLatinAmericaKeywordPage />;
}
