import Tibijka11EvoServerKeywordPage, { generateMetadata } from './tibijka-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11EvoServerKeywordPage />;
}
