import Tibiaretro96EvoServerKeywordPage, { generateMetadata } from './tibiaretro-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro96EvoServerKeywordPage />;
}
