import CoxaotPvpServerEuropeKeywordPage, { generateMetadata } from './coxaot-pvp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotPvpServerEuropeKeywordPage />;
}
