import Marolaot13RetroServerKeywordPage, { generateMetadata } from './marolaot-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot13RetroServerKeywordPage />;
}
