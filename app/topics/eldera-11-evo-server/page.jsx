import Eldera11EvoServerKeywordPage, { generateMetadata } from './eldera-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11EvoServerKeywordPage />;
}
