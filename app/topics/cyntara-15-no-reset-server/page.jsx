import Cyntara15NoResetServerKeywordPage, { generateMetadata } from './cyntara-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15NoResetServerKeywordPage />;
}
