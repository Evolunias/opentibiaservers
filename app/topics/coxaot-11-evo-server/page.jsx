import Coxaot11EvoServerKeywordPage, { generateMetadata } from './coxaot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11EvoServerKeywordPage />;
}
