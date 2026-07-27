import Tibiaretro81SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro81SeasonalServerKeywordPage />;
}
