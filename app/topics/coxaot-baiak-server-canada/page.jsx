import CoxaotBaiakServerCanadaKeywordPage, { generateMetadata } from './coxaot-baiak-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotBaiakServerCanadaKeywordPage />;
}
