import CoxaotCanadaServerKeywordPage, { generateMetadata } from './coxaot-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotCanadaServerKeywordPage />;
}
