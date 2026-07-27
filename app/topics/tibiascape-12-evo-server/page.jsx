import Tibiascape12EvoServerKeywordPage, { generateMetadata } from './tibiascape-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12EvoServerKeywordPage />;
}
