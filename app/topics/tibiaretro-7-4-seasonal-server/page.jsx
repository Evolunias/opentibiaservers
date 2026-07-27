import Tibiaretro74SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro74SeasonalServerKeywordPage />;
}
