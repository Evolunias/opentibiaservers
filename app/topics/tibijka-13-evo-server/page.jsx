import Tibijka13EvoServerKeywordPage, { generateMetadata } from './tibijka-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13EvoServerKeywordPage />;
}
