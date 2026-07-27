import MidhemSeasonalServerFranceKeywordPage, { generateMetadata } from './midhem-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemSeasonalServerFranceKeywordPage />;
}
