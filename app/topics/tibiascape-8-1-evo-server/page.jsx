import Tibiascape81EvoServerKeywordPage, { generateMetadata } from './tibiascape-8-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape81EvoServerKeywordPage />;
}
