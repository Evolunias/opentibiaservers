import Coxaot11NonPvpServerKeywordPage, { generateMetadata } from './coxaot-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11NonPvpServerKeywordPage />;
}
