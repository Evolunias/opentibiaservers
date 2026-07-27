import Kasteria14EvoServerKeywordPage, { generateMetadata } from './kasteria-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14EvoServerKeywordPage />;
}
