import Tibiaretro100SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro100SeasonalServerKeywordPage />;
}
