import Medivia11EvoServerKeywordPage, { generateMetadata } from './medivia-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11EvoServerKeywordPage />;
}
