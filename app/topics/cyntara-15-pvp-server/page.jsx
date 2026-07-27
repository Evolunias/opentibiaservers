import Cyntara15PvpServerKeywordPage, { generateMetadata } from './cyntara-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15PvpServerKeywordPage />;
}
