import Coxaot11PvpServerKeywordPage, { generateMetadata } from './coxaot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11PvpServerKeywordPage />;
}
