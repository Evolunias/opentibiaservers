import Cyntara11EvoServerKeywordPage, { generateMetadata } from './cyntara-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11EvoServerKeywordPage />;
}
