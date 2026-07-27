import CoxaotArgentinaServersKeywordPage, { generateMetadata } from './coxaot-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotArgentinaServersKeywordPage />;
}
