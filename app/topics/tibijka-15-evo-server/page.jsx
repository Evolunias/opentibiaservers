import Tibijka15EvoServerKeywordPage, { generateMetadata } from './tibijka-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15EvoServerKeywordPage />;
}
