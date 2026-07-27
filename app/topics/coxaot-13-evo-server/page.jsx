import Coxaot13EvoServerKeywordPage, { generateMetadata } from './coxaot-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot13EvoServerKeywordPage />;
}
