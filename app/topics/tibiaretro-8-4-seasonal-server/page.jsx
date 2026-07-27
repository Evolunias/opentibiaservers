import Tibiaretro84SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro84SeasonalServerKeywordPage />;
}
