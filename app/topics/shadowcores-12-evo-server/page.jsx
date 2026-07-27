import Shadowcores12EvoServerKeywordPage, { generateMetadata } from './shadowcores-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12EvoServerKeywordPage />;
}
