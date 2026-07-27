import Tibiantis13EvoServerKeywordPage, { generateMetadata } from './tibiantis-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis13EvoServerKeywordPage />;
}
