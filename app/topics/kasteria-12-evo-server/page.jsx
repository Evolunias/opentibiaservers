import Kasteria12EvoServerKeywordPage, { generateMetadata } from './kasteria-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12EvoServerKeywordPage />;
}
