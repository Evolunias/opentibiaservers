import CoxaotNorthAmericaServersKeywordPage, { generateMetadata } from './coxaot-north-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotNorthAmericaServersKeywordPage />;
}
