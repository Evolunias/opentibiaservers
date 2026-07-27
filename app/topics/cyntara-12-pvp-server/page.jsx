import Cyntara12PvpServerKeywordPage, { generateMetadata } from './cyntara-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12PvpServerKeywordPage />;
}
