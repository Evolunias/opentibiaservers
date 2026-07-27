import Medivia15EvoServerKeywordPage, { generateMetadata } from './medivia-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15EvoServerKeywordPage />;
}
