import Tibijka14EvoServerKeywordPage, { generateMetadata } from './tibijka-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14EvoServerKeywordPage />;
}
