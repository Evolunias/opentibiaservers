import TibiaretroSeasonalServerGermanyKeywordPage, { generateMetadata } from './tibiaretro-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroSeasonalServerGermanyKeywordPage />;
}
