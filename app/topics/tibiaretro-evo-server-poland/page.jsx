import TibiaretroEvoServerPolandKeywordPage, { generateMetadata } from './tibiaretro-evo-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroEvoServerPolandKeywordPage />;
}
