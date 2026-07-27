import CoxaotOtServerKeywordPage, { generateMetadata } from './coxaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotOtServerKeywordPage />;
}
