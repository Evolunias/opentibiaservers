import Tibiaretro13SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13SeasonalServerKeywordPage />;
}
