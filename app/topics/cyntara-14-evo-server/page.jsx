import Cyntara14EvoServerKeywordPage, { generateMetadata } from './cyntara-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara14EvoServerKeywordPage />;
}
