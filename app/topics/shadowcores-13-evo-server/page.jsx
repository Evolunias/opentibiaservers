import Shadowcores13EvoServerKeywordPage, { generateMetadata } from './shadowcores-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13EvoServerKeywordPage />;
}
