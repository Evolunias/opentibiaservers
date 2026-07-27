import CoxaotPvpServerUsaKeywordPage, { generateMetadata } from './coxaot-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotPvpServerUsaKeywordPage />;
}
