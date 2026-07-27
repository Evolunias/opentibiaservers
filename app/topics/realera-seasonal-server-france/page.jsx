import RealeraSeasonalServerFranceKeywordPage, { generateMetadata } from './realera-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSeasonalServerFranceKeywordPage />;
}
