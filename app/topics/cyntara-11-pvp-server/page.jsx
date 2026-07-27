import Cyntara11PvpServerKeywordPage, { generateMetadata } from './cyntara-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11PvpServerKeywordPage />;
}
