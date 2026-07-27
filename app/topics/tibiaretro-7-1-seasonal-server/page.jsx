import Tibiaretro71SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro71SeasonalServerKeywordPage />;
}
