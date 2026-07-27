import TibiaretroEvoServerLatinAmericaKeywordPage, { generateMetadata } from './tibiaretro-evo-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroEvoServerLatinAmericaKeywordPage />;
}
