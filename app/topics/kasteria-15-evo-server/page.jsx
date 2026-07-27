import Kasteria15EvoServerKeywordPage, { generateMetadata } from './kasteria-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15EvoServerKeywordPage />;
}
