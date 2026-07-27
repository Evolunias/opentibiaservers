import Cyntara13PvpServerKeywordPage, { generateMetadata } from './cyntara-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13PvpServerKeywordPage />;
}
