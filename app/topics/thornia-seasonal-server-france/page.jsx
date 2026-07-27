import ThorniaSeasonalServerFranceKeywordPage, { generateMetadata } from './thornia-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaSeasonalServerFranceKeywordPage />;
}
