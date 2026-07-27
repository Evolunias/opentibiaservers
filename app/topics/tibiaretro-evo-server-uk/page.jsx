import TibiaretroEvoServerUkKeywordPage, { generateMetadata } from './tibiaretro-evo-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroEvoServerUkKeywordPage />;
}
