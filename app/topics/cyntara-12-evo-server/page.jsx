import Cyntara12EvoServerKeywordPage, { generateMetadata } from './cyntara-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12EvoServerKeywordPage />;
}
