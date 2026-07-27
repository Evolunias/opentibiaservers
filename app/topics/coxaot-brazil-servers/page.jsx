import CoxaotBrazilServersKeywordPage, { generateMetadata } from './coxaot-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotBrazilServersKeywordPage />;
}
