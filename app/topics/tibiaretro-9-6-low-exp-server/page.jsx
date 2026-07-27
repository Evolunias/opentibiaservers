import Tibiaretro96LowExpServerKeywordPage, { generateMetadata } from './tibiaretro-9-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro96LowExpServerKeywordPage />;
}
