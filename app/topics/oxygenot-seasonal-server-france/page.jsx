import OxygenotSeasonalServerFranceKeywordPage, { generateMetadata } from './oxygenot-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotSeasonalServerFranceKeywordPage />;
}
