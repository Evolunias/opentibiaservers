import Tibiaretro12SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12SeasonalServerKeywordPage />;
}
