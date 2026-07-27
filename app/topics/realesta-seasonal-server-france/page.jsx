import RealestaSeasonalServerFranceKeywordPage, { generateMetadata } from './realesta-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaSeasonalServerFranceKeywordPage />;
}
