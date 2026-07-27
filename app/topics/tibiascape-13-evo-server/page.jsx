import Tibiascape13EvoServerKeywordPage, { generateMetadata } from './tibiascape-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13EvoServerKeywordPage />;
}
