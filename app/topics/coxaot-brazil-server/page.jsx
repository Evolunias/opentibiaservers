import CoxaotBrazilServerKeywordPage, { generateMetadata } from './coxaot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotBrazilServerKeywordPage />;
}
