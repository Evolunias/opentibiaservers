import Shadowcores15EvoServerKeywordPage, { generateMetadata } from './shadowcores-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15EvoServerKeywordPage />;
}
