import CoxaotPvpServerCanadaKeywordPage, { generateMetadata } from './coxaot-pvp-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotPvpServerCanadaKeywordPage />;
}
