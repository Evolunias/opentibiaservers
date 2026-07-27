import CoxaotSwedenServersKeywordPage, { generateMetadata } from './coxaot-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotSwedenServersKeywordPage />;
}
