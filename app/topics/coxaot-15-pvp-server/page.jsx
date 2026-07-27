import Coxaot15PvpServerKeywordPage, { generateMetadata } from './coxaot-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15PvpServerKeywordPage />;
}
