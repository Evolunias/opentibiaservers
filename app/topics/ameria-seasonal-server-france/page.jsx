import AmeriaSeasonalServerFranceKeywordPage, { generateMetadata } from './ameria-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaSeasonalServerFranceKeywordPage />;
}
