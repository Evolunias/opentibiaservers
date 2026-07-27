import Oxygenot11EvoServerKeywordPage, { generateMetadata } from './oxygenot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot11EvoServerKeywordPage />;
}
