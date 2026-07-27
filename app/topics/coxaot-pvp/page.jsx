import CoxaotPvpKeywordPage, { generateMetadata } from './coxaot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotPvpKeywordPage />;
}
