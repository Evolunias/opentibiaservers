import Marolaot15RetroServerKeywordPage, { generateMetadata } from './marolaot-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot15RetroServerKeywordPage />;
}
