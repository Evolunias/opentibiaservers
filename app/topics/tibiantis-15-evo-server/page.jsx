import Tibiantis15EvoServerKeywordPage, { generateMetadata } from './tibiantis-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis15EvoServerKeywordPage />;
}
