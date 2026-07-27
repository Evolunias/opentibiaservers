import Shadowcores14EvoServerKeywordPage, { generateMetadata } from './shadowcores-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores14EvoServerKeywordPage />;
}
