import Coxaot12EvoServerKeywordPage, { generateMetadata } from './coxaot-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12EvoServerKeywordPage />;
}
