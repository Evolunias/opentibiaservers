import CoxaotUsaServersKeywordPage, { generateMetadata } from './coxaot-usa-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotUsaServersKeywordPage />;
}
