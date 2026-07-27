import Tibiaretro15SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15SeasonalServerKeywordPage />;
}
