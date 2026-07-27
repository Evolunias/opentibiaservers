import Kasteria13EvoServerKeywordPage, { generateMetadata } from './kasteria-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13EvoServerKeywordPage />;
}
