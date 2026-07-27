import Marolaot12RetroServerKeywordPage, { generateMetadata } from './marolaot-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot12RetroServerKeywordPage />;
}
