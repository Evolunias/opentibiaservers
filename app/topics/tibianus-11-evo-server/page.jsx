import Tibianus11EvoServerKeywordPage, { generateMetadata } from './tibianus-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus11EvoServerKeywordPage />;
}
