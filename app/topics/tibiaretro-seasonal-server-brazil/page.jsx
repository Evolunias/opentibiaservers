import TibiaretroSeasonalServerBrazilKeywordPage, { generateMetadata } from './tibiaretro-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroSeasonalServerBrazilKeywordPage />;
}
