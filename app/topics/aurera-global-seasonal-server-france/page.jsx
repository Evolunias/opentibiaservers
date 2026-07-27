import AureraGlobalSeasonalServerFranceKeywordPage, { generateMetadata } from './aurera-global-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalSeasonalServerFranceKeywordPage />;
}
