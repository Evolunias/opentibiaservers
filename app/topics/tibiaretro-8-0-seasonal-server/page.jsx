import Tibiaretro80SeasonalServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80SeasonalServerKeywordPage />;
}
