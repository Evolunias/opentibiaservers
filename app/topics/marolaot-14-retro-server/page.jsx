import Marolaot14RetroServerKeywordPage, { generateMetadata } from './marolaot-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot14RetroServerKeywordPage />;
}
