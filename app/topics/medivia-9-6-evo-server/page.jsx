import Medivia96EvoServerKeywordPage, { generateMetadata } from './medivia-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96EvoServerKeywordPage />;
}
