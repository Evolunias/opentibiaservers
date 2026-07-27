import EvoTibiaretroServersKeywordPage, { generateMetadata } from './evo-tibiaretro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiaretroServersKeywordPage />;
}
