import Cyntara11NoResetServerKeywordPage, { generateMetadata } from './cyntara-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11NoResetServerKeywordPage />;
}
