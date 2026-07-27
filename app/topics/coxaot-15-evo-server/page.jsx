import Coxaot15EvoServerKeywordPage, { generateMetadata } from './coxaot-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15EvoServerKeywordPage />;
}
