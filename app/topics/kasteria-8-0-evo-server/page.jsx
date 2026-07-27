import Kasteria80EvoServerKeywordPage, { generateMetadata } from './kasteria-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80EvoServerKeywordPage />;
}
