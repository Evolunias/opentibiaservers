import Evolera14EvoServerKeywordPage, { generateMetadata } from './evolera-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera14EvoServerKeywordPage />;
}
