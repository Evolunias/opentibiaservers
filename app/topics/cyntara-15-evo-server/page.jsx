import Cyntara15EvoServerKeywordPage, { generateMetadata } from './cyntara-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15EvoServerKeywordPage />;
}
