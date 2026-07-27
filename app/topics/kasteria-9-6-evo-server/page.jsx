import Kasteria96EvoServerKeywordPage, { generateMetadata } from './kasteria-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria96EvoServerKeywordPage />;
}
