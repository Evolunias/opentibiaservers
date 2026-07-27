import Medivia14EvoServerKeywordPage, { generateMetadata } from './medivia-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14EvoServerKeywordPage />;
}
