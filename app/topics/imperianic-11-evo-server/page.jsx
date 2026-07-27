import Imperianic11EvoServerKeywordPage, { generateMetadata } from './imperianic-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic11EvoServerKeywordPage />;
}
