import Oldera11EvoServerKeywordPage, { generateMetadata } from './oldera-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11EvoServerKeywordPage />;
}
