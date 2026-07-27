import Tibiaretro86SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86SeasonalServerKeywordPage />;
}
