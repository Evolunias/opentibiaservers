import Evolunia12EvoServerKeywordPage, { generateMetadata } from './evolunia-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolunia12EvoServerKeywordPage />;
}
