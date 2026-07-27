import Blazera11EvoServerKeywordPage, { generateMetadata } from './blazera-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11EvoServerKeywordPage />;
}
