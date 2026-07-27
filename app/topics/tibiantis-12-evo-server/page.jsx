import Tibiantis12EvoServerKeywordPage, { generateMetadata } from './tibiantis-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis12EvoServerKeywordPage />;
}
