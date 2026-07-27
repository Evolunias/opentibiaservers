import Cyntara15NonPvpServerKeywordPage, { generateMetadata } from './cyntara-15-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15NonPvpServerKeywordPage />;
}
