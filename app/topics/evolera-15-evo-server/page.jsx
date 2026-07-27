import Evolera15EvoServerKeywordPage, { generateMetadata } from './evolera-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera15EvoServerKeywordPage />;
}
