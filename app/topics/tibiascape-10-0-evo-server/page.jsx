import Tibiascape100EvoServerKeywordPage, { generateMetadata } from './tibiascape-10-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape100EvoServerKeywordPage />;
}
