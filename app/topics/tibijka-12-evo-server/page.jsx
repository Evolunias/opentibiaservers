import Tibijka12EvoServerKeywordPage, { generateMetadata } from './tibijka-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12EvoServerKeywordPage />;
}
