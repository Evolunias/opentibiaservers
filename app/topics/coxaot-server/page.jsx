import CoxaotServerKeywordPage, { generateMetadata } from './coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotServerKeywordPage />;
}
