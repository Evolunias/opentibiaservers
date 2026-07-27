import Tibiaretro84EvoServerKeywordPage, { generateMetadata } from './tibiaretro-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro84EvoServerKeywordPage />;
}
