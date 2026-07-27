import Cyntara11NonPvpServerKeywordPage, { generateMetadata } from './cyntara-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11NonPvpServerKeywordPage />;
}
