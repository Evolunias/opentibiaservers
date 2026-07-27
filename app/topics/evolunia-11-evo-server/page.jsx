import Evolunia11EvoServerKeywordPage, { generateMetadata } from './evolunia-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia11EvoServerKeywordPage />;
}
