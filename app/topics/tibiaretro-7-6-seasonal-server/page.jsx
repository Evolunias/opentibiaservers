import Tibiaretro76SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro76SeasonalServerKeywordPage />;
}
