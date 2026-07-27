import TibiaretroEvoServerUsaKeywordPage, { generateMetadata } from './tibiaretro-evo-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroEvoServerUsaKeywordPage />;
}
