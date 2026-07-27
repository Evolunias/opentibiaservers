import Kasteria84EvoServerKeywordPage, { generateMetadata } from './kasteria-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria84EvoServerKeywordPage />;
}
