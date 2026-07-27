import CoxaotEuropeServersKeywordPage, { generateMetadata } from './coxaot-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotEuropeServersKeywordPage />;
}
