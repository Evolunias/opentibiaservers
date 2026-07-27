import Tibiascape96EvoServerKeywordPage, { generateMetadata } from './tibiascape-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape96EvoServerKeywordPage />;
}
