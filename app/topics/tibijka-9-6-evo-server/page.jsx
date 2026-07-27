import Tibijka96EvoServerKeywordPage, { generateMetadata } from './tibijka-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka96EvoServerKeywordPage />;
}
