import CoxaotSwedenServerKeywordPage, { generateMetadata } from './coxaot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotSwedenServerKeywordPage />;
}
