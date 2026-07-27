import Miracle11EvoServerKeywordPage, { generateMetadata } from './miracle-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle11EvoServerKeywordPage />;
}
