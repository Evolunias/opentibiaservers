import CoxaotArgentinaServerKeywordPage, { generateMetadata } from './coxaot-argentina-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotArgentinaServerKeywordPage />;
}
