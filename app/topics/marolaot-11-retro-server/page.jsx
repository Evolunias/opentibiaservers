import Marolaot11RetroServerKeywordPage, { generateMetadata } from './marolaot-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot11RetroServerKeywordPage />;
}
