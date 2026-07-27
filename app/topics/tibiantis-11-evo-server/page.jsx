import Tibiantis11EvoServerKeywordPage, { generateMetadata } from './tibiantis-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11EvoServerKeywordPage />;
}
